import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return redirect('https://dci03.dewaweb.com:2096/')
}
