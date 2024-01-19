import { CheckIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import stripePromise from "@/utils/stripe";
import Link from "next/link";
import { useAuthContext } from "@/store/AuthNavContext";
import { useRouter } from "next/router";
import getDocument from "@/firebase/Firestore/getData";
import toast, { Toaster } from "react-hot-toast";



const tiers = [
  {
    name: "Starter",
    id: "tier-freelancer",
    href: "/auth/login",
    pricestripe: "price_1NMJepHlXD1yqYgk2wFb9iHn",
    credits: "50",
    priceMonthly: "၂၀၀၀၀ ကျပ် ",
    btn: "button1",
    description:
      "ပုံ ၅၀ ထုတ်နိုင်ပါတယ်",
    features: [],
    mostPopular: false,
  },
  {
    name: "Business",
    id: "tier-startup",
    href: "/auth/login",
    pricestripe: "price_1NMJdRHlXD1yqYgklSHLQ6GW",
    credits: "200",
    priceMonthly: "၅၀၀၀၀ ကျပ် ",
    btn: "button2",
    description:
      "ပုံ ၂၀၀ ထုတ်နိုင်ပါတယ်.",
    features: [],
    mostPopular: true,
  },
  {
    name: " Enterprise",
    id: "tier-enterprise",
    pricestripe: "price_1NKQeaHlXD1yqYgkgY4iDbdU",
    credits: "500",
    href: "/auth/login",
    btn: "button3",
    priceMonthly: "၁၀၀၀၀ ကျပ် ",
    description:
      "ပုံ ၅၀၀ ထုတ်နိုင်ပါတယ်",
    features: [],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing({ id }) {
  const router = useRouter();
  const { referral } = router.query;
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useAuthContext();
  const [blocker, setBLockeur] = useState();
  const [loading, setLoading] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  });
const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const getDocumentData = async () => {
    // Your existing getDocumentData function
  };

  const handleOpenPaymentInfo = () => {
    setShowPaymentInfo(true);
  };

  const handleClosePaymentInfo = () => {
    setShowPaymentInfo(false);
  };

  const handleGoToMessenger = () => {
    // Add logic to redirect to Facebook Messenger page
    // window.location.href = "https://www.messenger.com/";
  };

  const handleOfflinePayment = async (event, priceId, userEmail, buttonName) => {
    event.preventDefault();

    setLoading((prevState) => ({
      ...prevState,
      [buttonName]: true,
    }));

    setErrorMessage("");
    const blockage = await getDocumentData();

    if (user && user.email && blockage === false) {
      // Perform the offline payment logic here
      // For example, you can show a success message
      toast.success("Payment successful! You will be contacted for further instructions.");
    } else if (blockage === true) {
      toast.error("Vous avez été bloqué, veuillez contacter le support");
    } else {
      // If the user is not authenticated, show payment information
      handleOpenPaymentInfo();
    }

    setLoading((prevState) => ({
      ...prevState,
      [buttonName]: false,
    }));
  };

return (
    <div className="bg-white py-24 sm:py-32" id={id}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ... (previous code) */}

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                // ... (previous code)
              )}
            >
              {/* ... (previous code) */}

              {user ? (
                <button
                  onClick={(event) =>
                    handleOfflinePayment(
                      event,
                      tier.pricestripe,
                      user.email,
                      tier.btn
                    )
                  }
                  disabled={loading[tier.btn]}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 flex items-center justify-center gap-4"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 flex items-center justify-center gap-4",
                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center gap-4"
                  )}
                >
                  {loading[tier.btn] ? "Chargement" : "Offline Payment"}
                  {loading[tier.btn] ? (
                    <div
                      className={classNames(
                        tier.mostPopular
                          ? "download-loader text-white"
                          : "download-loader-purple text-black"
                      )}
                    />
                  ) : (
                    <></>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleOpenPaymentInfo}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                      : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Payment Information
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      {showPaymentInfo && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="text-xl font-bold">Payment Information</h2>
              <button
                onClick={handleClosePaymentInfo}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              {/* Add payment details here */}
              <button
                onClick={handleGoToMessenger}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-indigo-500"
              >
                Go to Messenger
              </button>
              <button
                onClick={handleClosePaymentInfo}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}
