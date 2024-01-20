const faqs = [
  {
  id: 1,
  question: "iHouse AI ကို ဘယ်လိုဝယ်ရမလဲ ?",
  answer: "Credit များ ဝယ်ယူလိုပါက Payment ကနေ Kpay/Wave ဖြင့်ဝယ်ယူနိုင်ပါတယ်။ Payment Information ခလုတ်လေးကို နိုပ်လိုက်ပါက Payment Information ကျလာပါမယ်။ Payment Information မှာပါသည့် ငွေလွှဲနံပါတ်များကို ငွေလွှဲပြီးဝယ်ယူနိုင်ပါတယ်",
  },
  {
  id: 2,
  question: "iHouse AI ကို သုံးဖိုဘာလိုအပ်သလဲ ?",
  answer: "သင် ပြင်ဆင်ချင်သည့် အခန်းပုံလိုအပ်ပါမယ်။ ပြင်ချင်သည့် အခန်းကို ဓာတ်ပုံရိုက်ပါ။ အကောင့်ထဲဝင်ပြီး Dashboard ထဲမှာ AI နဲ့ ပြင်လို့ရပါပြီ",
  },
  {
  id: 3,
  question: "ပုံတွေကို စီးပွားရေးလုပ်ငန်းတွေမှာ အသုံးပြုနိုင်ပါသလား?",
  answer: "ပုံတွေကို ပြန်လည်ရောင်းချနိုင်ပြီး လုပ်ငန်းတွေမှာ အသုံးပြုနိင်ပါတယ်",
  },
  {
  id: 4,
  question: "အခန်းပုံတွေမဟုတ်ဘဲ အခြားပုံတွေရော ထုတ်လို့ရပါသလား ?",
  answer: "iHouse AI သည် အခန်း အတွင်းဒီဇိုင်းတွေထုတ်ဖို့ အဓိက တည်ဆောက်ထားတာကြောင့် အခန်းပုံများသာ ကောင်းကောင်းထုတ်ပေးနိုင်ပါတယ်",
  },
  {
  id: 5,
  question: "ထုတ်ချင်သည့် အခန်းဒီဇိုင်းပုံကို စိတ်ကြိုက် Prompt ရေးပြီး ထုတ်ခိုင်းလို့ရပါသလား ?",
  answer: "ရပါတယ်။ စိတ်ကြိုက် prompt ရေးပြီး ထုတ်ချင်သည့် အခန်းပုံစံ ဒီဇိုင်းကို ထုတ်ခိုင်းလို့ရပါတယ်",
  },
  {
  id: 6,
  question: "ထုတ်ထားသည့် ပုံတွေကို ပြန်ကြည့်လို့ရပါသလား ?",
  answer: "ကိုယ်ထုတ်ထားသည့် ပုံတွေကို History ကနေ ပြန်ကြည့်လို့ရပါတယ်",
  },
  // More questions...
  ];

export default function Faq({ id }) {
  return (
    <div id={id} className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              FAQ
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              အမေးများသည့် မေးခွန်းများ
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            iHouse AI နဲ့ ပတ်သက်ပြီး မေးမြန်းထားတာလေးတွေကို ဖြေပေးထားပါတယ် ?
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
