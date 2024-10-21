import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-4 bg-gray-200 dark:bg-gray-900 pt-10">
      <div className="hover:text-blue-400 font-semibold text-center">
        <div className="container mx-auto flex justify-center gap-10 flex-wrap">
          <div className="container max-w-7xl mx-auto flex flex-col items-center">
          <Link
            href="https://www.linkedin.com/in/gabriel-garcia-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
              <h3 className="text-2xl mb-2">Gabriel Jorge García - 2024</h3>
          </Link>
            <div className="flex items-center">
              <Image src="/GG-consulting.png" width={30} height={30} alt="Logo" className="mr-2" />
              <p className="text-center">Developer Full Stack</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
