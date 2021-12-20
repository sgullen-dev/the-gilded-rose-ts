export const improve = (quality: number) => {
  if (quality < 50) quality++;
  return quality;
}

export const degrade = (quality: number) => {
  if (quality > 0) quality--;
  return quality;
}

export const textBeginsWith = (text: string, beginsWith: string) => {
  return text.toLowerCase().indexOf(beginsWith.toLowerCase()) === 0;
}
