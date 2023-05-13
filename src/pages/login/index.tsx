import Link from 'next/link';
import Button from '../../components/PageParts/Button/Button';
import Input from '../../components/PageParts/Input/Input';


export default function Login() {
  // const dispatch = useDispatch();
  // function logIn(e) {
  //   e.preventDefault();
  //   const form = e.target;
  //   dispatch(
  //     setLogInThunk({
  //       email: form.email.value.trim(),
  //       password: form.password.value.trim(),
  //     })
  //   );
  // }
  return (
    <>
      <section className="authorization w-[550px] mx-auto">
        <div className="container">
          <div className="authorization_main">
            <h2 className="authorization_title">Login</h2>
            <form className="authorization_form" > 
              <Input
                required
                className="input_short input"
                type="email"
                name="email"
                labelText={"Email"}
                placeHolderText="Enter your email"></Input>
              <Input
                required
                className="input_short input"
                type="password"
                name="password"
                labelText={"Password"}
                placeHolderText="Enter your password"></Input>
              <Button type="submit" buttonText="Login"></Button>
            </form>
            <span>
              If you have an account you can{' '}
              <Link href="/reg" className="link_style">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
