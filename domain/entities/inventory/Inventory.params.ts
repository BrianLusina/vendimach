import Product from "../product/index.ts";

type InventoryParams = {
    products: Product[];
} & CommonParams;

export default InventoryParams;