export async function GET() {
  const fakeData = [
    {
      id: 1,
      name: 'Toque de fada',
      type: 'Bolo',
      size: [
        { size: 'P', value: 'R$24,00' },
        { size: 'M', value: 'R$44,00' },
        { size: 'G', value: 'R$64,00' },
      ],
      description: 'Um bolo mágico feito de leite ninho e cobertura de chocolate.',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Felicidade de chocolate',
      type: 'Cookie',
      size: [{ size: 'U', value: 'R$7,00' }],
      description: 'Um cookie delicioso de chocolate.',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Encanto Gelado',
      type: 'Cookie',
      size: [{ size: 'U', value: 'R$15,00' }],
      description: 'Um cookie refrescante com sorvete de baunilha.',
      image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Magia Negra',
      type: 'Cookie',
      size: [{ size: 'U', value: 'R$12,00' }],
      description: 'Um cookie de chocolate com recheio de dueto.',
      image: 'https://images.unsplash.com/photo-1619149651177-b09092806f1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Sonho Vermelho',
      type: 'Cupcake',
      size: [{ size: 'U', value: 'R$10,00' }],
      description: 'Um cupcake red velvet dos sonhos.',
      image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Toque de mel',
      type: 'Cupcake',
      size: [{ size: 'U', value: 'R$10,00' }],
      description: 'Um cupcake doce com toque de mel.',
      image: 'https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      name: 'Magia de Nozes',
      type: 'Cupcake',
      size: [{ size: 'U', value: 'R$11,00' }],
      description: 'Um cupcake crocante com nozes e sonho de valsa.',
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      name: 'Encanto Red Velvet',
      type: 'Bolo',
      size: [
        { size: 'P', value: 'R$16,00' },
        { size: 'M', value: 'R$32,00' },
        { size: 'G', value: 'R$48,00' },
      ],
      description: 'Um bolo red velvet encantador.',
      image: 'https://images.unsplash.com/photo-1695804567969-c0131994d0d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      name: 'Sonho de cacau',
      type: 'Bolo',
      size: [
        { size: 'P', value: 'R$14,00' },
        { size: 'M', value: 'R$28,00' },
        { size: 'G', value: 'R$42,00' },
      ],
      description: 'Um bolo de cacau dos sonhos.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return new Response(JSON.stringify(fakeData), {
    headers: { 'Content-Type': 'application/json' }
  });
}
