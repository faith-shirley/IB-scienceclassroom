export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} IB Science Classroom. All rights reserved.
        </p>
        <p className="text-[#4BA3C3] mt-1">
          Inquire. Teach. Empower.
        </p>
      </div>
    </footer>
  );
}