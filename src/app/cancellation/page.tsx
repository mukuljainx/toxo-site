import { Footer } from "@/components/footer";

export default function Cancellation() {
  return (
    <div className="p-4">
      <h2 className="text-4xl">Cancellation</h2>
      <p>
        You can cancel your subscription anytime using the app, subscription
        will be active till the next payment date of selected tenure.
      </p>
      <p>There is no refund for the remaining days of the subscription.</p>
      <Footer className="fixed bottom-0" />
    </div>
  );
}
