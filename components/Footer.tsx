import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden py-10 sm:py-14">
      <div className="padding-container max-container flex w-full flex-col gap-10">

        <div className="flex w-full flex-col gap-10 lg:flex-row lg:justify-between">

          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/LOGO.png"
              alt="logo"
              width={150}
              height={150}
              className="h-auto w-[110px] sm:w-[130px]"
            />
          </Link>

          {/* FOOTER CONTENT */}
          <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:flex lg:flex-1 lg:justify-between lg:gap-8">

            {/* FOOTER LINKS */}
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn
                key={columns.title}
                title={columns.title}
              >
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className="break-words hover:text-green-50"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* CONTACT */}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <div className="flex flex-col gap-4">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex flex-col gap-1"
                  >
                    <p className="regular-14">
                      {link.label}:
                    </p>

                    <p className="medium-14 break-words text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </div>
            </FooterColumn>

            {/* SOCIALS */}
            <FooterColumn title={SOCIALS.title}>
              <ul className="flex flex-wrap gap-4">
                {SOCIALS.links.map((link) => (
                  <li key={link}>
                    <Link href="/">
                      <Image
                        src={link}
                        alt="social"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

          </div>
        </div>

        {/* LINE */}
        <div className="h-px w-full bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          2023 Dstar | All rights reserved
        </p>

      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({
  title,
  children,
}: FooterColumnProps) => {
  return (
    <div className="flex min-w-0 flex-col gap-5">
      <h4 className="bold-18 break-words">
        {title}
      </h4>

      {children}
    </div>
  );
};

export default Footer;