
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    petName: '',
    petAge: '',
    petHealth: '',
    petPhoto: null,
    whatsapp: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'petPhoto') {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Dados enviados com sucesso! QRCode gerado.');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Achadim - Cadastro do Pet</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="petName" placeholder="Nome do animal" value={form.petName} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="petAge" placeholder="Idade do animal" value={form.petAge} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="petHealth" placeholder="Problemas de saúde, medicamentos, etc." value={form.petHealth} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="file" name="petPhoto" accept="image/*" onChange={handleChange} className="w-full" required />
        <input name="whatsapp" placeholder="WhatsApp do tutor" value={form.whatsapp} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Gerar QR Code</button>
      </form>
    </div>
  );
}
