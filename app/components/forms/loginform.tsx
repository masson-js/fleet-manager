import Link from "next/link";

export default function Loginform() {
  return (
    <div className="relative flex w-full h-screen items-start justify-center bg-gray-200 text-gray-800">
      {/* Фоновое изображение, заполняющее всю страницу */}
      <div className="absolute inset-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center opacity-15"></div>
      
      {/* Форма входа с отступом сверху */}
      <div className="relative z-10 bg-gray-700 p-4 rounded-lg border-4 text-white mt-10">
       <div>Login</div>
       <div>Login</div>
       <div>Login</div>
       <div>Login</div>
       <div>Login</div>
       <div>Login</div>
       <div>Login</div>
      </div>
    </div>
  );
}
