export const calcDistance = (
  element: HTMLSpanElement | HTMLDivElement,
  event: MouseEvent
): number => {
  if (!event) {
    throw new Error("Event object must be provided");
  }

  // Get the bounding rectangle of the element
  const rect = element.getBoundingClientRect();

  // Calculate the distance
  const distance = Math.sqrt(
    (event.clientX - (rect.left + rect.width / 2)) ** 2 +
      (event.clientY - (rect.top + rect.height / 2)) ** 2
  );

  // Return the floored value of the distance
  return Math.floor(distance);
};
