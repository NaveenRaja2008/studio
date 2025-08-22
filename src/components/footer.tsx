import Link from 'next/link';
import { BookMarked } from 'lucide-react';

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <Link href="#" className="text-muted-foreground hover:text-foreground">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <BookMarked className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">Literary Haven</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your personal sanctuary for book lovers.</p>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary">Home</Link></li>
              <li><Link href="/my-books" className="text-sm hover:text-primary">My Books</Link></li>
              <li><Link href="/orders" className="text-sm hover:text-primary">Orders</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#new-arrival" className="text-sm hover:text-primary">New Arrival</Link></li>
              <li><Link href="#fiction" className="text-sm hover:text-primary">Fiction</Link></li>
              <li><Link href="#children" className="text-sm hover:text-primary">Children</Link></li>
              <li><Link href="#self-development" className="text-sm hover:text-primary">Self Development</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 4.01C21.3 4.31 20.55 4.52 19.78 4.63C20.58 4.16 21.21 3.43 21.49 2.58C20.75 3.01 19.95 3.35 19.1 3.55C18.39 2.81 17.31 2.33 16.13 2.33C13.84 2.33 11.98 4.19 11.98 6.48C11.98 6.81 12.02 7.12 12.09 7.42C8.42 7.24 5.16 5.56 2.89 2.94C2.52 3.56 2.32 4.29 2.32 5.07C2.32 6.54 3.06 7.84 4.19 8.59C3.52 8.57 2.9 8.39 2.34 8.11V8.17C2.34 10.15 3.76 11.82 5.74 12.22C5.38 12.31 5.01 12.36 4.63 12.36C4.36 12.36 4.1 12.33 3.85 12.29C4.37 13.89 5.86 15.03 7.62 15.06C6.21 16.19 4.41 16.85 2.5 16.85C2.17 16.85 1.85 16.83 1.53 16.79C3.32 17.98 5.46 18.66 7.78 18.66C16.12 18.66 20.1 11.86 20.1 5.84C20.1 5.66 20.1 5.48 20.09 5.3C20.9 4.72 21.58 4.02 22 3.25V4.01Z"></path></svg>
              </SocialIcon>
              <SocialIcon>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.02,2.02c-5.51,0-9.98,4.47-9.98,9.98c0,5.51,4.47,9.98,9.98,9.98c5.51,0,9.98-4.47,9.98-9.98C22,6.49,17.53,2.02,12.02,2.02z M12.02,19.98c-4.4,0-7.98-3.58-7.98-7.98s3.58-7.98,7.98-7.98s7.98,3.58,7.98,7.98S16.42,19.98,12.02,19.98z M16.03,8.98H14.5c-0.27,0-0.5,0.22-0.5,0.5v1.5h2v2h-2v4.5h-2V13h-1.5v-2H12v-2c0-0.82,0.68-1.5,1.5-1.5h1.53V8.98z" clip-rule="evenodd"></path></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Literary Haven. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
