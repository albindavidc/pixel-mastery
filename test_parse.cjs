const simClasses = "flex items-center justify-center self-start place-self-center justify-self-end col-span-2 row-span-3 order-last";
const itemPrefixes = [
  'basis-', 'grow', 'shrink', 'order-', 
  'col-', 'row-', 'justify-self-', 'self-', 'place-self-'
];

const classList = simClasses.split(' ').map(c => c.trim()).filter(Boolean);
const containerClassList = [];
const itemClassList = [];

classList.forEach(c => {
  const isItemClass = itemPrefixes.some(prefix => 
    (prefix === 'grow' && c === 'grow') ||
    (prefix === 'shrink' && c === 'shrink') ||
    (prefix.endsWith('-') && c.startsWith(prefix))
  );
  
  if (isItemClass) {
    itemClassList.push(c);
  } else {
    containerClassList.push(c);
  }
});

console.log("Container:", containerClassList);
console.log("Item:", itemClassList);
