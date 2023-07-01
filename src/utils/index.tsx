export default function nameof<T>(name: keyof T): string {
    return name as string;
  }