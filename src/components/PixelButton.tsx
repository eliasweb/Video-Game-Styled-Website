"use client";

import Link from "next/link";
import { play } from "@/lib/sounds";

type Variant = "primary" | "secondary" | "success" | "coin";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  sfx?: Parameters<typeof play>[0];
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type Props = ButtonProps | LinkProps;

export default function PixelButton(props: Props) {
  const variant = props.variant ?? "primary";
  const className = `pixel-btn pixel-btn--${variant} ${props.className ?? ""}`.trim();
  const sfx = props.sfx ?? "select";

  const handleSfx = () => play(sfx);

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          className={className}
          href={props.href}
          target="_blank"
          rel="noreferrer noopener"
          onClick={handleSfx}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link className={className} href={props.href} onClick={handleSfx}>
        {props.children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonProps;
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={(e) => {
        handleSfx();
        onClick?.(e);
      }}
    >
      {props.children}
    </button>
  );
}
