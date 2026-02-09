import Link from "next/link";

export default function Register() {
  return <div>
    Register
    Replace is used to remove prev history and redirect to original page 
    <Link href={'/register/user'} replace>User</Link>
    
  </div>
}