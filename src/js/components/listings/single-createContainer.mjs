// Helper function to create bid container
export const createBidContainer = (amount, icon, label) => {
  const bidContainer = document.createElement('div');
  bidContainer.classList.add(
    'border',
    'border-zinc-800',
    'bg-gradient-to-tl',
    'from-zinc-800',
    'rounded-xl',
    'h-20',
    'p-4',
    'flex',
    'justify-center',
    'flex-col',
  );

  const amountElement = document.createElement('p');
  amountElement.classList.add('text-2xl', 'font-bold');
  amountElement.textContent = amount;

  const labelElement = document.createElement('h3');
  labelElement.classList.add('flex', 'items-center', 'gap-2', 'text-sm');
  const iconElement = document.createElement('span');
  iconElement.classList.add('material-symbols-outlined', 'text-purple-300');
  iconElement.textContent = icon;
  labelElement.appendChild(iconElement);
  labelElement.appendChild(document.createTextNode(label));

  bidContainer.appendChild(amountElement);
  bidContainer.appendChild(labelElement);

  return bidContainer;
};
