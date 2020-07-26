import numeral from "numeral";

export const formatNumber = (n: Number): String => numeral(n).format("0,0");
