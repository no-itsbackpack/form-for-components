import { field } from "form-for";

export default class User {
  @field name;

  @field({ type: "tel" })
  phone;

  @field({ type: "email" })
  email;

  @field({ type: "select", required: true, options: { guest: "Guest", admin: "Admin" } })
  access;

  @field({ type: "color" })
  favoriteColor;

  @field({ type: "radio", options: { employed: "Currently employed", unemployed: "Unemployed" } })
  employment;
}
