import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AuthForm } from '@/components/auth-form';

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AuthForm type="signup" />
      </main>
      <Footer />
    </div>
  );
}
