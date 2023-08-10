SET client_min_messages TO WARNING;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
DROP SCHEMA "public" CASCADE;

CREATE SCHEMA "public";

CREATE TABLE "products" (
	"productName" TEXT NOT NULL,
	"price" real NOT NULL,
	"category" TEXT NOT NULL,
	"imageUrl" TEXT NOT NULL,
	"description" TEXT NOT NULL,
  "longDescription" TEXT NOT NULL,
	"productId" serial NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "customers" (
	"customerId" serial NOT NULL,
	"username" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"createdAt" TIMESTAMP,
	CONSTRAINT "customers_pk" PRIMARY KEY ("customerId")
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



CREATE TABLE "shoppingCartItems" (
	"productId" int NOT NULL,
  "quantity" int NOT NULL,
	"cartId" int NOT NULL,
	CONSTRAINT "shoppingCartItems_pk" PRIMARY KEY ("cartId", "productId")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "shoppingCart" ADD CONSTRAINT "shoppingCart_fk0" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId");
ALTER TABLE "shoppingCartItems" ADD CONSTRAINT "shoppingCartItems_fk0" FOREIGN KEY ("productId") REFERENCES "products"("productId");
ALTER TABLE "shoppingCartItems" ADD CONSTRAINT "shoppingCartItems_fk1" FOREIGN KEY ("cartId") REFERENCES "shoppingCart"("cartId");
