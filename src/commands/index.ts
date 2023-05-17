import { ICommand } from "../types/command";
import { Design } from "./design";
import { Doing } from "./doing";
import { Embed } from "./embed";
import { Finish } from "./finish";
import { Issue } from "./issue";

export const Commands: ICommand[] = [Embed, Issue, Design, Finish, Doing];
