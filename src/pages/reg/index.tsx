import Link from 'next/link';
import Button from '../../components/PageParts/Button/Button';
import Input from '../../components/PageParts/Input/Input';

export default function Registration() {
  return (
    <>
      <section className="authorization">
        <div className="container">
          <div className="authorization_main">
            <h2 className="authorization_title">Registration</h2>
            <form className="authorization_form" >
              <label htmlFor="name">Name</label>    
              <Input
                required
                className="input_short input"
                type="text"
                name="name"
                labelText={"Name"}
                placeHolderText="Enter your name"></Input>
              <label htmlFor="email">Email</label>
              <Input
                required
                className="input_short input"
                type="email"
                name="email"
                labelText={"Email"}
                placeHolderText="Enter your email"></Input>
              <label htmlFor="password">Password</label>
              <Input
                required
                className="input_short input"
                type="password"
                name="password"
                labelText={"Password"}
                placeHolderText="Enter your password"></Input>
              <Button type="submit" buttonText="Sign up"></Button>
            </form>
            <span>
              If you have an account you can{' '}
              <Link href="/login" className="link_style">
                Login
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
