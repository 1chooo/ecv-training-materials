def generate_subnets():
    subnets = []
    for i in range(0, 256):
        subnets.append(f"10.0.{i}.0/24")
    return subnets

print(generate_subnets())