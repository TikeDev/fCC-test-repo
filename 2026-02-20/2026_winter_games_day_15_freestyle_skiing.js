function isValidTrick(trickName) {
  return ["Misty", "Ghost", "Thunder", "Solar", "Sky", "Phantom", "Frozen", "Polar"].includes(trickName.split(" ")[0]) && ["Twister", "Icequake", "Avalanche", "Vortex", "Snowstorm", "Frostbite", "Blizzard", "Shadow"].includes(trickName.split(" ")[1]);
}
