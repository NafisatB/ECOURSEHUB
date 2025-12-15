import './button.css'

// Button.jsx
import React, { forwardRef } from "react";
 
/** small helper for className composition */
function cx(...args) {
  return args.filter(Boolean).join(" ");
}
 
/**
* Production-ready React Button (JSX)
* - forwards ref
* - supports polymorphic 'as' (button, a, custom)
* - accessible: aria-disabled + disabled when needed
*/
const Button = forwardRef(function Button(
  {
    as,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    children,
    className,
    href,
    type = "button",
    onClick,
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading;
  // Decide element to render
  const computedAs = as || (href ? "a" : "button");
  const isButton = computedAs === "button";
 
  const classes = cx(
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && "btn--full",
    isDisabled && "btn--disabled",
    leftIcon && "btn--has-left-icon",
    rightIcon && "btn--has-right-icon",
    className
  );
 
  // If rendering an anchor but disabled, prevent navigation and make it un-focusable
  const anchorProps =
    computedAs === "a" && isDisabled
      ? { "aria-disabled": true, onClick: (e) => e.preventDefault(), tabIndex: -1, href: href || "#" }
      : computedAs === "a"
      ? { href }
      : {};
 
  const buttonProps = isButton
    ? { type, disabled: isDisabled, "aria-disabled": isDisabled }
    : { role: "button", "aria-disabled": isDisabled };
 
  function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if (onClick) onClick(e);
  }
 
  const Content = (
    <>
      {loading && (
        <span className="btn__spinner" aria-hidden="true" />
      )}
      {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span className="btn__content">{children}</span>
      {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </>
  );
 
  const Element = computedAs;
 
  return (
    <Element
      {...buttonProps}
      {...anchorProps}
      {...rest}
      ref={ref}
      className={classes}
      onClick={handleClick}
    >
      {Content}
    </Element>
  );
});
 
export default Button;

// export default function CustomButtom({children, onClick, href, variant}){
// const Element = href ? 'a' : 'button'
// const variantObject= {
// primary: 'btn--promary app-btn,
// secondary: 'btn--secondary app-some-class-for-secondary-btn',
// default: 'btn--default'
// }
// const variantClass = variantObject[variant] || variantObject.default
// return <Element onClick={onClick} href={href} className = {variantClass}>
// {children}
// </Element>
// }