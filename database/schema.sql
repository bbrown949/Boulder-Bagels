set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "customers" (
  "customerId" serial NOT NULL,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" integer NOT NULL,
  CONSTRAINT "customer_pk" PRIMARY KEY ("customerId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "products" (
  "productId" serial NOT NULL,
  "productName" TEXT NOT NULL,
  "quantity" integer NOT NULL,
  "category" integer NOT NULL,
  "price" integer NOT NULL,
  "imageUrl" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "longDescription" TEXT NOT NULL,
  CONSTRAINT "product_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "order" (
  "orderId" serial NOT NULL,
  "customerId" integer NOT NULL,
  "orderDate" integer NOT NULL,
  "isFullfilled" BOOLEAN NOT NULL,
  CONSTRAINT "order_pk" PRIMARY KEY ("orderId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "orderItems" (
  "orderItemsId" serial NOT NULL,
  "orderId" integer NOT NULL,
  "productId" integer NOT NULL,
  CONSTRAINT "orderItems_pk" PRIMARY KEY ("orderItemsId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "shoppingCartItems" (
  "quantity" int NOT NULL,
  "productId" int NOT NULL,
  "cartId" int NOT NULL,
  CONSTRAINT "shoppingCartItems_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "shoppingCart" (
  "customerId" int NOT NULL,
  "cartId" serial NOT NULL,
  CONSTRAINT "shoppingCart_pk" PRIMARY KEY ("cartId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "shoppingCartItems" ADD CONSTRAINT "shoppingCartItems_fk0" FOREIGN KEY ("productId") REFERENCES "products"("productId");
ALTER TABLE "shoppingCartItems" ADD CONSTRAINT "shoppingCartItems_fk1" FOREIGN KEY ("cartId") REFERENCES "shoppingCart"("cartId");
ALTER TABLE "shoppingCart" ADD CONSTRAINT "shoppingCart_fk0" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId");
ALTER TABLE "order" ADD CONSTRAINT "order_fk0" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId");

ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_fk0" FOREIGN KEY ("orderId") REFERENCES "order"("orderId");
ALTER TABLE "orderItems" ADD CONSTRAINT "orderItems_fk1" FOREIGN KEY ("productId") REFERENCES "products"("productId");
