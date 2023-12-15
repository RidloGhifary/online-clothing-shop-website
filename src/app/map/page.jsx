import { MapPinLine } from "@phosphor-icons/react/dist/ssr";

export default function Map() {
  return (
    <div className="w-full md:p-10">
      <div className="my-4 flex items-center gap-1">
        <MapPinLine size={28} color="#6b7280" weight="fill" />
        <p className="font-medium text-lg text-neutral-800 dark:text-neutral-100">Jalan Jaksa Agung No.26 (Belakang SMAN 1 KOTA JOMBANG) Kabupaten Jombang, Jawa Timur, Indonesia</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.1840557505334!2d112.233!3d-7.5549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78401f7a798743%3A0xfce15c855535872f!2sSMA%20Negeri%201%20Jombang!5e0!3m2!1sen!2sid!4v1701699881283!5m2!1sen!2sid" width="800"
        height="600"
        className="border-0 w-full h-[500px] rounded-lg shadow-md"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}