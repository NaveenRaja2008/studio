import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AuthForm } from '@/components/auth-form';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AuthForm type="login" />
      </main>
      <Footer />
    </div>
  );
}
