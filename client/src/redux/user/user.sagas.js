import {takeLatest , put, all, call} from 'redux-saga/effects';
import userActionType from "./user.type"
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { SignInSuccess, SignInFailure, signOutSuccess, signUpSuccess, signOutFailure , signUpFailure } from './user.action';


export function* getSnapshotFromUserAuth(UserAuth, additionalData){
    try {
        const userRef = yield call(createUserProfileDocument, UserAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
            SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(SignInFailure(error));
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user) ;
    } catch(error){
        yield put(SignInFailure(error));
    }
}

export function* onGoogleSIgnInStart(){
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START, signInWithGoogle )
}


export function* signInWithEmail({payload: {email, password}}){

    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error){
        yield put(SignInFailure(error));
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionType.EMAIL_SIGN_IN_START, signInWithEmail )
}

export function* isUserAuthenticated(){
    try{
        const {userAuth} = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);

    } catch(error){
        yield put(SignInFailure(error));
    }
}

export function* onCheckUserSession(){
    yield takeLatest(userActionType.CHECK_USER_SESSION , isUserAuthenticated)
}

export function* signOut(){
    try{
       yield auth.signOut();
        yield put(signOutSuccess());

    } catch(error){
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart(){
    yield takeLatest(userActionType.SIGN_OUT_START , signOut )
}

export function* signUp({payload: {email , password, displayName}}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: {displayName}}))

    } catch(error){
        yield put(signUpFailure(error)) ;
    }
}

export function* onSignUpStart(){
    yield takeLatest(userActionType.SIGN_UP_START , signUp)
}

export function* signInAfterSignUp({ payload: { user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess(){
    yield takeLatest(userActionType.SIGN_UP_SUCCESS , signInAfterSignUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSIgnInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}