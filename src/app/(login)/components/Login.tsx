//component
//ここでログインページを作成し、sigh-inとupでそれぞれのモードでimportして使う
//参考URL https://github.com/nextjs/saas-starter/blob/main/app/(login)/login.tsx
export default function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  return (
    <>
      <h1>login</h1>
    </>
  );
}
