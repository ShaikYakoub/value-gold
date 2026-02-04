export default function Footer() {
  return (
    <footer className="mt-24 border-t border-blue-200 dark:border-amber-500/30 py-6 text-center">
      <p className="text-xs text-gray-600 dark:text-gray-300">
        Gold price data provided by{" "}
        <a
          href="https://goldpricez.com"
          target="_blank"
          rel="noopener nofollow"
          className="underline text-blue-600 dark:text-amber-400 hover:opacity-80"
        >
          GoldPriceZ.com
        </a>
      </p>
    </footer>
  );
}


