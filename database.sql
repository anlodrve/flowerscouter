
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "categories" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "mappedPlants" (
	"id" serial NOT NULL,
	"location" POINT NOT NULL, 
	"category" INT REFERENCES "categories", 
	"description" TEXT,
	"author" int, 
	CONSTRAINT "mapped_plants_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"authorId" int NOT NULL,
	"commentText" TEXT NOT NULL,
	"postId" int NOT NULL
) WITH (
  OIDS=FALSE
);

ALTER TABLE "mappedPlants" ADD CONSTRAINT "mappedPlants_fk1" FOREIGN KEY ("author") REFERENCES "user"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("authorId") REFERENCES "user"("id");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("postId") REFERENCES "mappedPlants"("id");