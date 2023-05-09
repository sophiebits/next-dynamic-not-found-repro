import { cookies } from 'next/headers';

export default function NotFound() {
  cookies(); // dynamic
  return <div>{new Date().toString()}</div>;
}
