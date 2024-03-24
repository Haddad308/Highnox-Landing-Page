
import '@styles/globals.css';
import { Providers } from './Providers';
import Nav from '@components/Nav';

export const metadata = {
  title: "Home"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            <Nav/>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
