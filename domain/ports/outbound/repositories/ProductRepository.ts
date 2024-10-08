import { Repository } from "../../../../core/src/lib/adapters/index.ts"
import Product from "../../../entities/product/index.ts";


export default interface ProductRepository extends Repository<Product> {}
