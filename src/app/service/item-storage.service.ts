// item-storage.service.ts
import { Injectable, signal } from '@angular/core';

export interface ItemCatalogo {
  id: number;
  name: string;
  quant: number;
  desc: string;
}

@Injectable({ providedIn: 'root' })
export class ItemStorageService {
  private readonly STORAGE_KEY = 'itensCatalogo';

  items = signal<ItemCatalogo[]>(this.loadFromStorage());

  private loadFromStorage(): ItemCatalogo[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private persist(items: ItemCatalogo[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.items.set(items);
  }

  add(item: ItemCatalogo): void {
    this.persist([...this.items(), item]);
  }

  remove(id: number): void {
    this.persist(this.items().filter(i => i.id !== id));
  }

  update(id: number, changes: Partial<ItemCatalogo>): void {
    this.persist(
      this.items().map(i => (i.id === id ? { ...i, ...changes } : i))
    );
  }

  reload(): void {
    this.items.set(this.loadFromStorage());
  }
}
