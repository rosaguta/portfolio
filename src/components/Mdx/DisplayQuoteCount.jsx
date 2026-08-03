export default function DisplayQuoteCount({ quoteCount, rizzCount, insultCount }) {
    return <div>
        <pre className="text-purple-300">Quote count: {quoteCount}</pre>
        <pre className="text-pink-300">Rizz count: {rizzCount}</pre>
        <pre className="text-red-300">Insult count: {insultCount}</pre>
    </div>;
}