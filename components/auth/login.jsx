import { signIn, GoogleLogin } from "@/firebase/Auth/signin";
import addData from "@/firebase/Firestore/appData";
import getDocument from "@/firebase/Firestore/getData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      toast.error("Une erreur est survenue !");
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };

  const handlegoogle = async (e) => {
    e.preventDefault();
  
    const { user, error: loginError } = await GoogleLogin();
    let dataError; // Déclaration de la variable en dehors du bloc try
  
    try {
      const data = {
        email: user.email,
        pseudo: user.displayName,
        piec: "5",
        blocked: false,
      };
  
      const userDoc = await getDocument("users", user.uid);
  
      if (userDoc.result && userDoc.result.exists()) {
        // User document already exists, no need to do anything else
        console.log("User document already exists, skipping creation");
        return router.push("/dashboard");
      }
  
      const { result: dataResult, error } = await addData("users", user.uid, data);
      dataError = error; // Assigner la valeur de l'erreur à la variable dataError
    } catch (e) {
      console.log(e);
    }
  
    if (loginError || dataError) {
      console.log(loginError || dataError);
      return;
    }
    return router.push("/dashboard");
  };
  
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ချိတ်ဆက်မှုလုပ်မယ်
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleForm}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  စကားဝှက်
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="mt-10 text-left text-sm text-gray-500">
                <Link
                  href="/auth/resetmotdepasse"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
               သင့်စကားဝှက်ကိုမေ့နေပါသလား
                </Link>
              </p>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  ချိတ်ဆက်မှုလုပ်မယ်
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    သို့မဟုတ် အကောင့်ဖြင့် ဝင်ရောက်ပါ။
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
               
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Member မဝင်ရသေးဘူးလား ?{" "}
            <Link
              href="/auth/sigin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              အကောင့်ဖွင့်ပါ
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </>
  );
}
