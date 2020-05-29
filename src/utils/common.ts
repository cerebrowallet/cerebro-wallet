import Big from 'big.js';

/**
 * Converts the given enum to a map of the keys to the values.
 * @param enumeration The enum to convert to a map.
 */
export function enumToMap(enumeration: any): Map<string, string | number> {
  const map = new Map<string, string | number>();
  for (let key in enumeration) {
    //TypeScript does not allow enum keys to be numeric
    if (!isNaN(Number(key))) continue;

    const val = enumeration[key] as string | number;

    //TypeScript does not allow enum value to be null or undefined
    if (val !== undefined && val !== null) map.set(key, val);
  }

  return map;
}

export function enumToArray(enumeration: any): [string, string | number][] {
  return Array.from(enumToMap(enumeration).entries());
}

export function normalizeArray(
  array: any[],
  idProp: string
): { byIds: { [id: string]: any }; allIds: string[] } {
  return array.reduce(
    (acc, el) => {
      const a = acc;
      a.byIds[el[idProp]] = el;
      a.allIds.push(el[idProp]);
      return a;
    },
    {
      byIds: {},
      allIds: [],
    }
  );
}

export function isObject(object: any): boolean {
  return typeof object === 'object' && object !== null;
}

export const toSatoshi = (btc: number) => Number(Big(btc).times(100000000));

export const toBTC = (satoshi: number) => satoshi / 100000000;

export const round = (value: number, decimals: number = 2) => {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
};

export const parseFloatStr = (value: string) => {
  return parseFloat(value.replace(',', '.')) || 0;
};

export const groupBy = (xs: any, key: any) => {
  return xs.reduce((rv: any, x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export function hexToRGB(hex: string, alpha?: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}${alpha ? `, ${alpha}` : ''})`;
}

// export const normalizeTxs =
