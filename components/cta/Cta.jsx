import Link from "next/link";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            iHouse AI အကြောင်း
              </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600 ">
            iHouse AI သည် ပြည်တွင်း ဗိသုကာပညာရှင်များ နှင့် AI ပညာရှင်များ ပူးပေါင်း ဖန်တီးတည်ဆောက်ထားသည့် Interior Design AI platform တစ်ခုဖြစ်ပါတယ်။ 
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600 text-justify">
            မိမိတို့ ပြင်ချင်သည့် အခန်းတွေကို ဒီဇိုင်းပုံစံ အမျိုးမျိုးနဲ့ ထုတ်ကြည့်ခိုင်းနိုင်ပါတယ်။ AI နည်းပညာကို အခုမှစသုံးမည့်သူများပင် အသုံးပြုရလွယ်ကူအောင် တည်ဆောက်ပေးထားပါတယ်။ အပြင်မှာရှိသည့် အခန်းကို ဓာတ်ပုံရိုက်ယူပြီး AI ကို အခန်းပုံစံပြကာ လက်ရှိအခန်းနှင့် တူညီသည့် မိမိလိုချင်သည့် အခန်းဒီဇိုင်း ပုံစံအမျိုးမျိုးကို စက္ကန့်ပိုင်းအတွင်းမှာ ထုတ်ပေးနိုင်စွမ်းရှိပါတယ်။ .
            </p>
            <div className="mt-10 flex">
              <Link
                href="/dashboard"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Commencer <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                width={1152}
                height={806}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
