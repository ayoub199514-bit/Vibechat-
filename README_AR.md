# VibeChat — مشروع Firebase vibechat-525b0

الباقات: شهر 9.99 USDT، ثلاثة أشهر 24.99 USDT، سنة 79.99 USDT.

تتضمن الحزمة واجهة عربية متجاوبة، إعداد Firebase الذي أرسلته، قواعد Firestore وRealtime Database، وبداية خادم Cloud Functions.

**تنبيه:** هذه ليست نسخة جاهزة لقبول أموال حقيقية. تكامل Binance Pay والتحقق من توقيع إشعارات الدفع والاستعلام عن حالة الطلب غير مكتمل؛ لا يتم تفعيل العضوية. لا تعتمد على صور الإيصالات أو صفحة العودة من المتصفح.

النشر من كمبيوتر:
1. ثبّت Node.js وFirebase CLI.
2. `firebase login`
3. `firebase use vibechat-525b0`
4. `cd functions && npm install && cd ..`
5. `firebase deploy`

فعّل Authentication وأنشئ Firestore أولًا. قواعد Realtime Database مغلقة افتراضيًا؛ أضف قواعد دقيقة لميزات الدردشة قبل نشرها. لا تضع أسرار Binance في ملفات الواجهة أو GitHub. يلزم إكمال تسجيل الدخول، لوحة المالك، تكامل الدفع الحقيقي، وتفعيل العضوية بعد التحقق فقط.
