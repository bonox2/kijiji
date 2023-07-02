import Link from 'next/link';
import Button from '../../components/PageParts/Button';
import Input from '../../components/PageParts/Input';


export default function Login() {
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
