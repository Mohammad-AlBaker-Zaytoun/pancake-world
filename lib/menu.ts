// lib/menu.ts

export type MenuItem = {
    title: string;
    path: string;
  };
  
  export const localMenu: MenuItem[] = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
  
  // Function to fetch menu (simulated as local data for now)
  export async function getMenu(): Promise<MenuItem[]> {
    return localMenu; // Simulating a fetch by returning local data
  }
  