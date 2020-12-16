
export default function getPages({glue = '...', ...options}) {
  const groups = pageGroups(options);
  return groups.reduce((result, group) => {
    if (!(result instanceof Array)) return group;
    return [...result, glue, ...group];
  });
}

export function pageGroups({max = 7, first = 1, pages = 1, current = 1}) {
  const secuence = (num, start = 0) => Array(num).fill(first+start).map((f,n) => f+n);
  const n = current - first;
  const last = pages - first;

  if (max < 5) max = 5; // 5 or more pages

  if (pages <= max) return [secuence(pages)];

  // hodd (half / odd pages)
  const hodd = max % 2 === 1;

  // hl (half-low), hh (half-high)
  let hl = parseInt(max/2);
  let hh = hl + ~~hodd;

  if (n < hl) {
    return [ secuence(hh), secuence(hl, last-hl+1) ];
  }

  if (n === hl) {
    return [ secuence(hl+2), secuence(max-hl-2, last-hl+2) ];
  }

  if (n > hl && n < last - hl) {
    // qodd (quarter / odd half)
    const qodd = hl % 2 === 1;
    // ql (quarter-low), qh (quarter-high)
    let ql = parseInt(hl/2);
    let qh = ql + ~~qodd;
    return [ secuence(qh), secuence(ql*2 + ~~hodd, n-ql), secuence(qh, last-ql) ];
  }

  if (n === last - hl) {
    return [ secuence(max-hl-2), secuence(hl+2, last-hl-1) ];
  }

  if (n > last - hl) {
    return [ secuence(hl), secuence(hh, last-hh+1) ];
  }

  return [];
}
