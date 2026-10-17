const {onCall,HttpsError}=require('firebase-functions/v2/https');
const {defineSecret}=require('firebase-functions/params');
const admin=require('firebase-admin');
admin.initializeApp();
const db=admin.firestore();
const KEY=defineSecret('BINANCE_PAY_API_KEY');
const SECRET=defineSecret('BINANCE_PAY_API_SECRET');
const CERT=defineSecret('BINANCE_PAY_CERT_SN');
const PLANS={monthly:{amount:'9.99',days:30},quarterly:{amount:'24.99',days:90},yearly:{amount:'79.99',days:365}};
exports.createMembershipOrder=onCall({region:'europe-west1',secrets:[KEY,SECRET,CERT]},async req=>{
 if(!req.auth) throw new HttpsError('unauthenticated','سجّل الدخول أولًا.');
 if(!PLANS[req.data?.planId]) throw new HttpsError('invalid-argument','باقة غير معروفة.');
 if(!KEY.value()||!SECRET.value()||!CERT.value()) throw new HttpsError('failed-precondition','بيانات تاجر Binance Pay غير مضبوطة.');
 throw new HttpsError('unimplemented','تكامل Binance Pay والتحقق من إشعار الدفع غير مكتمل. لم يتم تفعيل العضوية.');
});
exports.getOwnerDashboard=onCall({region:'europe-west1'},async req=>{
 if(!req.auth||req.auth.token.owner!==true) throw new HttpsError('permission-denied','للمالك فقط.');
 const [p,s]=await Promise.all([db.collection('payments').orderBy('createdAt','desc').limit(100).get(),db.collection('subscriptions').orderBy('createdAt','desc').limit(100).get()]);
 return {payments:p.docs.map(d=>({id:d.id,...d.data()})),subscriptions:s.docs.map(d=>({id:d.id,...d.data()}))};
});
// No membership activation exists until Binance webhook signature and server-side order status are verified.
