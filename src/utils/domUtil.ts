export function setFocusById(id: string, parent: HTMLElement) {
  if (!parent) {
    return;
  }

  const el = parent.querySelector<HTMLElement>(`#${id}`);
  if (el) {
    el.focus();
  }
}