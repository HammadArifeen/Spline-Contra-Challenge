import Link from "next/link";
import clsx from "clsx";

type Props = {
    href: string;
    buttonText: string;
    className?: string;
};

export default function InternalButton({ href, buttonText, className }: Props) {
    return (
        <Link
            className={clsx(
                "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide \
         text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
                className,
            )}
            href={href}
        >
            {buttonText}
        </Link>
    );
}
