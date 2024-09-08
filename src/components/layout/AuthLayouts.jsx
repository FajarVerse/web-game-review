import "../../style/layout.css";

const AuthLayouts = (props) => {
  const { classNameSection,classNameMain, children } = props;

  return (
    <>
      <section className={classNameSection}>
        <main className={classNameMain}>{children}</main>
      </section>
    </>
  );
};

export default AuthLayouts
